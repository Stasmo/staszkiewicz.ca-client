import Api from '@/services/Api';

export default {
  fetchPages() {
    return Api().get('pages');
  },
};
