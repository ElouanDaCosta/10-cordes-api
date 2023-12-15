import { Module } from '@nestjs/common';
import { ServersModule } from 'src/servers/servers.module';
import { ServersService } from 'src/servers/servers.service';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { VoiceGateway } from './voice.gateway';

@Module({
  imports: [UsersModule, ServersModule],
  providers: [VoiceGateway, UsersService, ServersService],
})
export class VoiceGatewayModule {}
