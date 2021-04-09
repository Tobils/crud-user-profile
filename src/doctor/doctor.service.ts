import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>
  ){}
  private logger: Logger = new Logger('doctor-service')

  public async create(createDoctorDto: CreateDoctorDto) {
    this.logger.log('This action adds a new doctor');
    const doctor  = new Doctor()
    doctor.image  = createDoctorDto.image
    doctor.name   = createDoctorDto.name
    doctor.location = createDoctorDto.location
    doctor.address_notes = createDoctorDto.address_notes
    doctor.specialist = createDoctorDto.specialist

    try {
      return await this.doctorRepository.save(doctor)
    } catch (error) {
      return error
    }
  }

  public async findAll() {
    this.logger.log(`This action returns all doctor`);
    try {
      return await this.doctorRepository.find()
    } catch (error) {
      return error
    }
  }

  public async findOne(uuid: string) {
    this.logger.log(`This action returns a #${uuid} doctor`);
    try {
      return await this.doctorRepository.findOneOrFail(uuid)
    } catch (error) {
      return error
    }
  }

  public async update(uuid: string, updateDoctorDto: UpdateDoctorDto) {
    this.logger.log(`This action updates a #${uuid} doctor`);
    try {
      await this.doctorRepository.update(uuid, updateDoctorDto)
      return await this.findOne(uuid)
    } catch (error) {
      return error
    }
  }

  public async remove(uuid: string) {
    this.logger.warn(`This action removes a #${uuid} doctor`);
    try {
      await this.doctorRepository.softDelete(uuid)
      return await this.findAll()
    } catch (error) {
      return error
    }
  }
}
