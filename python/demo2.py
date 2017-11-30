line = 'asdf fjdk; afed, fjek,asdf, foo'
import re
a = re.split(r'[;,\s]\s*', line)
print(a)

import os
filenames = os.listdir('.')