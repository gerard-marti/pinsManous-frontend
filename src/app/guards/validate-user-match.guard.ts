import { CanMatchFn } from '@angular/router';

export const validateUserMatchGuard: CanMatchFn = (route, segments) => {
  return true;
};
