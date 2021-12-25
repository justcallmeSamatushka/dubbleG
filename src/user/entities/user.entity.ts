import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from '../interfaces/user-interface';

@Entity({
  name: 'users'
})
export class UserEntity implements IUser {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text',
    nullable: false
  })
  email: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  name: string

  @Column({
    type: 'text',
    default: 'client'
  })
  role: string

  @Column({
    type: 'text',
    default: 'new'
  })
  status: string

  @Column({
    type: 'text',
    default: new Date()
  })
  created: Date

  @Column({
    type: 'text',
    default: new Date()
  })
  updated: Date

  // @Column({
  //   type: 'array',
  //   default: []
  // })
  // agencies: object[]

  // @Column({
  //   type: 'array',
  //   default: []
  // })
  // publishers: object[]

  // @Column({
  //   type: 'array',
  //   default: []
  // })
  // advertisers: object[]
}