FROM ruby:3.1.2

ENV BUNDLER_VERSION 2.3.20

RUN apt-get update -qq && apt-get install -y nodejs

RUN gem install bundler -v $BUNDLER_VERSION

WORKDIR /backend

COPY . .

RUN bundle install

EXPOSE 3001
