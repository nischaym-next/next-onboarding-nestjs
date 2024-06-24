import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Band {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  origin: string;

  @Column({ nullable: false })
  website: string;

  @Column({ nullable: false })
  yearsActive: number;

  @Column({ nullable: true })
  disbandingYear: number;

  @Column({ default: () => `now()` })
  updated: Date;
}
