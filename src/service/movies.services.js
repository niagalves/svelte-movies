import API_URL from '../api/api';

const get = async (param, type) => {
  return await fetch(`${API_URL(param, type)}`).then(x => x.json());
};

export default get;
