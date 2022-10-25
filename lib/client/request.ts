import axios from 'axios';
import { FragmentResponse, ParsedFragment } from '../interfaces/fragment';

const LoadFragment = async (fragment: ParsedFragment): Promise<FragmentResponse> => {
  const response = await axios.request({
    method: 'GET',
    url: fragment.attributes.href as string,
  });
  
  return {
    id: fragment.fragment,
    content: response.data,
  };
}

export {
  LoadFragment,
};
