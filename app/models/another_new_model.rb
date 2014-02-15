class AnotherNewModel < ActiveRecord::Base
  # attr_accessible :title, :body

  def method1
  end

  def method2
    case method1
    when true then ""
    else           ""
    end
  end
end
