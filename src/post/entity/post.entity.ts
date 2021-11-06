import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false , length: 255})
  title: string;

  @Column({ nullable: false, length: 255 })
  content: string;

  @Column({ name: 'user_name', nullable: false, length: 100 })
  userName: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}

