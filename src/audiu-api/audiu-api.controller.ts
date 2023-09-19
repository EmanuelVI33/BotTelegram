import { Controller } from '@nestjs/common';

@Controller('audiu-api')
export class AudiuApiController {
  // getStreamTrack(id: number) {
  //   fetch(
  //     `https://blockchange-audius-discovery-02.bdnodes.net/v1/tracks/${id}/stream?app_name=EXAMPLEAPP`,
  //     {
  //       method: 'GET',
  //     },
  //   )
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then(function (body) {
  //       return body;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return null;
  //     });
  // }
  // @OnEvent('message_received')
  // setupEventListeners({ text }: { text: string }) {
  //   const headers = {
  //     Accept: 'application/json',
  //   };
  //   fetch(
  //     `https://blockchange-audius-discovery-02.bdnodes.net/v1/tracks/search?query=${text}&app_name=EXAMPLEAPP`,
  //     {
  //       method: 'GET',
  //       headers: headers,
  //     },
  //   )
  //     .then(function (res) {
  //       return res.json();
  //     })
  //     .then(function (body) {
  //       const { id } = body;
  //       const audio = getStreamTrack(id);
  //     });
  // }
}
