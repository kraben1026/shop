/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthorizationService {
  private readonly accessTokenSecret: string;

  constructor(private readonly configService: ConfigService) {
    this.accessTokenSecret = this.configService.get<string>('ACCESS_TOKEN_SECRET');
  }

  public authorize(authorizationHeader: string): any {
    const token = authorizationHeader.split(' ')[1];
    console.log(token)
    try {
      const decoded = jwt.verify(token, this.accessTokenSecret);
      return decoded;
    } catch (error) {
        console.log(error)
      throw new UnauthorizedException('Not authorized (bad token)');
    }
  }
}