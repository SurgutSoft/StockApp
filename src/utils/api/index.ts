import axios from 'axios';
import qs from 'qs';

export default function api(conf: any) {
  const config = conf;
  config.paramsSerializer = (params: any) => qs.stringify(
    params,
    {
      allowDots: true,
      arrayFormat: 'repeat',
    },
  );

  return axios(config)
    .then((response) => {
      if (response.status === 200 || response.status === 201 || response.status === 202) return response.data;

      return Promise.reject(response.data);
    })
};
