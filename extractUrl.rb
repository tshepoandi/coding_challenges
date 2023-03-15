# https://github.com/tshepoandi/coding_challenges
# embarassing solution, need to refactor ...one day

def domain_name(url)
  # return just the domain name
  indexOfSlashes = url.enum_for(:scan,/\/\//).map { Regexp.last_match.begin(0) }
  urlParam = url.split(".")[0]
  if indexOfSlashes.empty?
    indexOfSlashes = 0
    answer = urlParam === "www" ? url.split(".")[1] : urlParam
    return answer
  else
    indexOfSlashes = indexOfSlashes[0]
    ans = [url.split(".")[1], url.split(".")[0]]
    answ = ""
    ans.each do |thing|
      if !thing.enum_for(:scan,/\/\//).map { Regexp.last_match.begin(0) }.empty?
        a = thing[thing.enum_for(:scan,/\/\//).map { Regexp.last_match.begin(0) }[0],thing.length]
        if a.split("//")[1] == "www"
          ans.delete(thing)
        end
      end
    end
    if ans.length == 1
      return ans[0]
    end
    answer = url[indexOfSlashes + 2,urlParam.length ].split(".")[0]
    return answer == "www" ? url[indexOfSlashes + 2,urlParam.length ].split(".")[1] : answer
  end
end
