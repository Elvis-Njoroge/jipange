class AssetSerializer < ActiveModel::Serializer
  attributes :id, :name,:location, :category, :value
end
