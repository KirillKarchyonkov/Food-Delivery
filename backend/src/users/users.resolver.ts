import { Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Query } from '@nestjs/graphql';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Query(() => String)
  getProfile() {
    return 'User profile data';
  }

}
