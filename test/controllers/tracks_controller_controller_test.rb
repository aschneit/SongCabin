require 'test_helper'

class TracksControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get tracks_controller_create_url
    assert_response :success
  end

  test "should get show" do
    get tracks_controller_show_url
    assert_response :success
  end

  test "should get destroy" do
    get tracks_controller_destroy_url
    assert_response :success
  end

end
