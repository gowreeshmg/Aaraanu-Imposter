import re
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

err_script = """<script>
  window.onerror = function(msg, url, line) {
    if(!window.ERR_SHOWN) {
      alert("JS Error: " + msg + " on line " + line);
      window.ERR_SHOWN = true;
    }
  };
</script>"""

if "window.onerror" not in html:
    html = html.replace("<head>", "<head>\n  " + err_script)
    html = re.sub(r"\?v=\d+", "?v=31", html)
    with open("index.html", "w", encoding="utf-8") as f:
        f.write(html)

print("Done")
