import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  
  this.route('load-players');
  this.route('load-coaches');
  this.route('load-answers');
  this.route('load-questions');

  // this.route('player');

  this.route('coach', function() {
    this.route('manage');
    this.route('review');
    this.route('profile');
    this.route('chat-select');
    this.route('chat');
    this.route('chat', { path: '/chat/:player_id' });
    this.route('players');
    this.route('player', { path: '/player/:player_id' });
    this.route('player', { path: '/player/:player_id/:day' });
  });

  this.route('player', function() {
    this.route('review');
    this.route('chat');
    this.route('profile');
    this.route('leaderboard');
  });

  this.route('signup');
  this.route('signup-questions');
});

export default Router;
