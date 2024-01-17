import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../user.service';

export const userGuard: CanActivateFn = (route, state) => {
  const user = inject(UserService);
  if(user.userLogin){
    return true;
  }
  const router = inject(Router);
  router.navigate([""]);
  return false;
};
