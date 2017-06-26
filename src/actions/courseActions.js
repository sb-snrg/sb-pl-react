/**
 * Created by jaures on 26/06/2017.
 */

import * as types from './actionTypes';

export function createCourse(course) {
  return { type : types.CREATE_COURSE, course };
}

