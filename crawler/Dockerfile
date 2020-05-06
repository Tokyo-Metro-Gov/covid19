FROM ruby:2.6.3

WORKDIR /app/crawler
COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle install --path vendor/bundle

COPY . ./

CMD ["ruby", "inspection_data_crawler.rb"]
