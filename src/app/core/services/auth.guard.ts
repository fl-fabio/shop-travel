import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from './auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(Authservice);
  const router = inject(Router);

 /*  if (auth.isLogged()) {
    return true;
  } else {
    router.navigateByUrl('login');
  }
  return false; */
  return true;
};
