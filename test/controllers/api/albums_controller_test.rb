require 'test_helper'

class Api::AlbumsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_albums_create_url
    assert_response :success
  end

  test "should get update" do
    get api_albums_update_url
    assert_response :success
  end

end
