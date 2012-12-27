class Post < ActiveRecord::Base
  attr_accessible :content, :title, :tags_attributes, :image
 
  validates :content, :presence => true

  has_attached_file :image, :styles => {:thumb => ["592x592#", :jpg]}
  has_many :tags
  accepts_nested_attributes_for :tags, :allow_destroy => :true,
    :reject_if => proc { |attrs| attrs.all? { |k, v| v.blank? } }  

end