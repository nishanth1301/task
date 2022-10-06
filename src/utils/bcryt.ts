import * as bcrypt from 'bcrypt';
export async function encodePassword(rawPassword: string): Promise<string> {
  const SALT = bcrypt.genSaltSync();
  return await bcrypt.hash(rawPassword, SALT);
}
// export const comparePassword = async (userPassword, currentPassword) => {
//   return await bcrypt.compare(currentPassword, userPassword);
// };
