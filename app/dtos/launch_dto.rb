class LaunchDTO
  attr_reader :name, :date, :patch

  def initialize(data)
    @name = data['name']
    @date = data['date_utc']
    @patch = data.dig('links', 'patch', 'small')
  end
end