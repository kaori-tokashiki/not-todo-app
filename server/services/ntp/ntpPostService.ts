import Ntp from '../../models/ntp'


export class ntpPostService {

  async postNtp(titile, user): Promise<void> {
      const ntp = new Ntp();

      try {
        ntp.save(titile, user);

      } catch(err) {
        throw new Error(err);
      }
  }

}
