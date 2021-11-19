Pod::Spec.new do |s|
    s.name          =   "RNFullBatteryStatus"
    s.version       =   "1.0.0"
    s.summary       =   "RNFullBatteryStatus"
    s.description   = <<-DESC
                        RNFullBatteryStatus
                        DESC
    s.homepage      =   ""
    s.license       =   "MIT"
    s.autor         ={"autor" => "author@domain.cn"}
    s.plataform     =:ios, "7.0"
    s.source        ={:git => "https://github.com/author/RNFullBatteryStatus.git", :tag => "master"}
    s.source_files  ="RNFullBatteryStatus/**/*.{h,m}"
    s.requires_arc  =true
    s.dependency "React"                     
end    