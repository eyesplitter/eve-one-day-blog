package EveBlog;
use Mojo::Base 'Mojolicious';

sub startup {
  my $c = shift;

  my $r = $c->routes;

  $r->get('/')->to('guest#index');
}

1;
