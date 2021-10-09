import Ntp from '../../models/ntp'
import { IUser } from '../../interfaces/user'


export class NtpPostService {

  async postNtp(title: string, user: IUser): Promise<void> {
      
    try {
        const ntp = new Ntp({ title, user })
        await ntp.save();
    }
    catch(err){
        throw new Error(err);
    }
  }

}
