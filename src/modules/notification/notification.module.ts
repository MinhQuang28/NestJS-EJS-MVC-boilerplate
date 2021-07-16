import { Module } from '@nestjs/common';
import { RedisModule } from '@redis/redis.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
    imports: [RedisModule],
    controllers: [NotificationController],
    providers: [NotificationService],
})
export class NotificationModule {}
