import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_report')
export class UserReport {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @Column({ name: 'reason', type: 'text' })
  reason: string;

  @Column({ name: ' resolved', type: 'boolean', default: false })
  resolved: boolean;

  @ManyToOne(() => User, (user) => user.reportsMade)
  @JoinColumn({ name: 'reporter_id' })
  reporter: User;

  @JoinColumn({ name: 'reported_user_id' })
  @ManyToOne(() => User, (user) => user.reportedBy)
  reportedUser: User;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;
}
