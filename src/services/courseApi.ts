import request from './request'
import { ICourseResponse } from '@/interfaces/course'

export default async function fetchCourseList(keywords: string) {
  const res: ICourseResponse = await request('/courseList', {
    method: 'get', params: { keywords }
  })
  return res
}
