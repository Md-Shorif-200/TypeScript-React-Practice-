import React from 'react'
import LogIn from './LogIn'
import type { profileType } from './Profile';

type privateRouteType = {
      isLoggedIn : boolean;
      Component : React.ComponentType<profileType>;
}

export default function Private({isLoggedIn,Component}:privateRouteType) {
      if(isLoggedIn){
          return <Component name="shorif" />;
      } 
  return <LogIn/>
}
