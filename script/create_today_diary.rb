require "date"
now = Time.now
year = now.strftime('%Y')
month = now.strftime('%m')
day = now.strftime('%d')
File.open("./src/markdown/#{year}#{month}#{day}.md", mode = "w"){|f|
  f.write("---\nid: \"#{year}年#{month}月#{day}日\"\ntitle: \"#{year}年#{month}月#{day}日\"\ndate: \"#{year}-#{month}-#{day}\"\n---\n")
}