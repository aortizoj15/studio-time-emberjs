import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    return {
      title: 'Paramount Recording Studio',
      owner: 'Brain Bolin',
      city: 'Hollywood',
      location: {
        lat: 34.0912,
        lng: -118.326,
      },
      category: 'Studio',
      type: 'Building',
      bedrooms: 8,
      image: '../../assets/images/keys-record-setup.jpg',
      description:
        "Located in Hollywood, CA, Paramount Recording Studio is home to many of today's popular songs.",
    };
  }
}
