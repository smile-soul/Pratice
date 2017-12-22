const axios = require('axios');
const cheerio = require('cheerio');
const $ = cheerio.load(`<div id="itempool"> <div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">videogame_asset</i>
    <div class="caption">videogame asset</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">watch</i>
    <div class="caption">watch</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">camera_roll</i>
    <div class="caption">camera roll</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">center_focus_strong</i>
    <div class="caption">center focus strong</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">add_to_photos</i>
    <div class="caption">add to photos</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_return</i>
    <div class="caption">keyboard return</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brightness_5</i>
    <div class="caption">brightness 5</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brightness_6</i>
    <div class="caption">brightness 6</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brightness_7</i>
    <div class="caption">brightness 7</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_phone</i>
    <div class="caption">local phone</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_pharmacy</i>
    <div class="caption">local pharmacy</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_16_9</i>
    <div class="caption">crop 16 9</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_3_2</i>
    <div class="caption">crop 3 2</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_8</i>
    <div class="caption">filter 8</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">star_half</i>
    <div class="caption">star half</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">star_border</i>
    <div class="caption">star border</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">star</i>
    <div class="caption">star</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">radio_button_unchecked</i>
    <div class="caption">radio button unchecked</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_hide</i>
    <div class="caption">keyboard hide</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_capslock</i>
    <div class="caption">keyboard capslock</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">grain</i>
    <div class="caption">grain</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_play</i>
    <div class="caption">local play</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">school</i>
    <div class="caption">school</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_off</i>
    <div class="caption">hdr off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">device_hub</i>
    <div class="caption">device hub</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">devices_other</i>
    <div class="caption">devices other</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">dock</i>
    <div class="caption">dock</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brightness_1</i>
    <div class="caption">brightness 1</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter</i>
    <div class="caption">filter</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_1</i>
    <div class="caption">filter 1</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sentiment_neutral</i>
    <div class="caption">sentiment neutral</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">blur_on</i>
    <div class="caption">blur on</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">exposure_zero</i>
    <div class="caption">exposure zero</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_weak</i>
    <div class="caption">hdr weak</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_strong</i>
    <div class="caption">hdr strong</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_on</i>
    <div class="caption">hdr on</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phonelink</i>
    <div class="caption">phonelink</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_iphone</i>
    <div class="caption">phone iphone</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_android</i>
    <div class="caption">phone android</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">mouse</i>
    <div class="caption">mouse</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">memory</i>
    <div class="caption">memory</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_5</i>
    <div class="caption">filter 5</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_4</i>
    <div class="caption">filter 4</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tv</i>
    <div class="caption">tv</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">child_care</i>
    <div class="caption">child care</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 11556px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">navigate_next</i>
    <div class="caption">navigate next</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 11556px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">palette</i>
    <div class="caption">palette</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 11556px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">panorama</i>
    <div class="caption">panorama</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 16032px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">whatshot</i>
    <div class="caption">whatshot</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 16032px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">share</i>
    <div class="caption">share</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 16032px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sentiment_very_satisfied</i>
    <div class="caption">sentiment very satisfied</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">speaker</i>
    <div class="caption">speaker</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">speaker_group</i>
    <div class="caption">speaker group</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">vibration</i>
    <div class="caption">vibration</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_post_office</i>
    <div class="caption">local post office</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 13892px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">more_horiz</i>
    <div class="caption">more horiz</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 13892px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">menu</i>
    <div class="caption">menu</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 13892px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">last_page</i>
    <div class="caption">last page</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">fitness_center</i>
    <div class="caption">fitness center</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">child_friendly</i>
    <div class="caption">child friendly</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_9_plus</i>
    <div class="caption">filter 9 plus</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_hdr</i>
    <div class="caption">filter hdr</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">grid_off</i>
    <div class="caption">grid off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">exposure_zero</i>
    <div class="caption">exposure zero</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">toys</i>
    <div class="caption">toys</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tablet_mac</i>
    <div class="caption">tablet mac</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_original</i>
    <div class="caption">crop original</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">laptop_chromebook</i>
    <div class="caption">laptop chromebook</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">laptop_mac</i>
    <div class="caption">laptop mac</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">laptop_windows</i>
    <div class="caption">laptop windows</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sim_card</i>
    <div class="caption">sim card</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">smartphone</i>
    <div class="caption">smartphone</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_offer</i>
    <div class="caption">local offer</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">folder_special</i>
    <div class="caption">folder special</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">time_to_leave</i>
    <div class="caption">time to leave</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tap_and_play</i>
    <div class="caption">tap and play</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 11556px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">nature_people</i>
    <div class="caption">nature people</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">add_a_photo</i>
    <div class="caption">add a photo</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">wifi</i>
    <div class="caption">wifi</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">wc</i>
    <div class="caption">wc</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">vpn_lock</i>
    <div class="caption">vpn lock</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">exposure</i>
    <div class="caption">exposure</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">edit</i>
    <div class="caption">edit</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">blur_linear</i>
    <div class="caption">blur linear</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_frames</i>
    <div class="caption">filter frames</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_arrow_right</i>
    <div class="caption">keyboard arrow right</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_3</i>
    <div class="caption">filter 3</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_2</i>
    <div class="caption">filter 2</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">gamepad</i>
    <div class="caption">gamepad</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">headset</i>
    <div class="caption">headset</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">headset_mic</i>
    <div class="caption">headset mic</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">mood_bad</i>
    <div class="caption">mood bad</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">notifications</i>
    <div class="caption">notifications</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter</i>
    <div class="caption">filter</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">voice_chat</i>
    <div class="caption">voice chat</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">compare</i>
    <div class="caption">compare</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">exposure_plus_1</i>
    <div class="caption">exposure plus 1</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">exposure_neg_2</i>
    <div class="caption">exposure neg 2</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">exposure_neg_1</i>
    <div class="caption">exposure neg 1</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">bluetooth_audio</i>
    <div class="caption">bluetooth audio</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">confirmation_number</i>
    <div class="caption">confirmation number</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">colorize</i>
    <div class="caption">colorize</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">color_lens</i>
    <div class="caption">color lens</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">blur_circular</i>
    <div class="caption">blur circular</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">control_point</i>
    <div class="caption">control point</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">control_point_duplicate</i>
    <div class="caption">control point duplicate</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop</i>
    <div class="caption">crop</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 11556px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">navigate_before</i>
    <div class="caption">navigate before</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">collections_bookmark</i>
    <div class="caption">collections bookmark</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">image_aspect_ratio</i>
    <div class="caption">image aspect ratio</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">image</i>
    <div class="caption">image</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">healing</i>
    <div class="caption">healing</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">domain</i>
    <div class="caption">domain</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">cake</i>
    <div class="caption">cake</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">person_add</i>
    <div class="caption">person add</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">person</i>
    <div class="caption">person</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 12052px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">transform</i>
    <div class="caption">transform</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_see</i>
    <div class="caption">local see</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_shipping</i>
    <div class="caption">local shipping</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">audiotrack</i>
    <div class="caption">audiotrack</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_b_and_w</i>
    <div class="caption">filter b and w</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">adjust</i>
    <div class="caption">adjust</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_free</i>
    <div class="caption">crop free</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_din</i>
    <div class="caption">crop din</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_7_5</i>
    <div class="caption">crop 7 5</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_5_4</i>
    <div class="caption">crop 5 4</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tablet_android</i>
    <div class="caption">tablet android</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tablet</i>
    <div class="caption">tablet</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">business_center</i>
    <div class="caption">business center</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">pages</i>
    <div class="caption">pages</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">party_mode</i>
    <div class="caption">party mode</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brush</i>
    <div class="caption">brush</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">camera_rear</i>
    <div class="caption">camera rear</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">desktop_windows</i>
    <div class="caption">desktop windows</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">developer_board</i>
    <div class="caption">developer board</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">navigation</i>
    <div class="caption">navigation</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">my_location</i>
    <div class="caption">my location</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">map</i>
    <div class="caption">map</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_taxi</i>
    <div class="caption">local taxi</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_voice</i>
    <div class="caption">keyboard voice</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">group</i>
    <div class="caption">group</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">group_add</i>
    <div class="caption">group add</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">location_city</i>
    <div class="caption">location city</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">mood</i>
    <div class="caption">mood</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">burst_mode</i>
    <div class="caption">burst mode</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">camera</i>
    <div class="caption">camera</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">camera_alt</i>
    <div class="caption">camera alt</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">camera_front</i>
    <div class="caption">camera front</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_tab</i>
    <div class="caption">keyboard tab</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_pizza</i>
    <div class="caption">local pizza</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">adb</i>
    <div class="caption">adb</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">radio_button_checked</i>
    <div class="caption">radio button checked</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sentiment_dissatisfied</i>
    <div class="caption">sentiment dissatisfied</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 12052px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tonality</i>
    <div class="caption">tonality</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">check</i>
    <div class="caption">check</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_9</i>
    <div class="caption">filter 9</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 14812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">system_update</i>
    <div class="caption">system update</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">center_focus_weak</i>
    <div class="caption">center focus weak</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">collections</i>
    <div class="caption">collections</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">assistant</i>
    <div class="caption">assistant</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">assistant_photo</i>
    <div class="caption">assistant photo</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">notifications_paused</i>
    <div class="caption">notifications paused</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">enhanced_encryption</i>
    <div class="caption">enhanced encryption</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">drive_eta</i>
    <div class="caption">drive eta</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">do_not_disturb_on</i>
    <div class="caption">do not disturb on</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">do_not_disturb_off</i>
    <div class="caption">do not disturb off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">do_not_disturb_alt</i>
    <div class="caption">do not disturb alt</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_portrait</i>
    <div class="caption">crop portrait</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_hdr</i>
    <div class="caption">filter hdr</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_frames</i>
    <div class="caption">filter frames</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_drama</i>
    <div class="caption">filter drama</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_center_focus</i>
    <div class="caption">filter center focus</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_b_and_w</i>
    <div class="caption">filter b and w</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_9_plus</i>
    <div class="caption">filter 9 plus</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_9</i>
    <div class="caption">filter 9</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">network_locked</i>
    <div class="caption">network locked</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_recline_normal</i>
    <div class="caption">airline seat recline normal</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_recline_extra</i>
    <div class="caption">airline seat recline extra</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_legroom_reduced</i>
    <div class="caption">airline seat legroom reduced</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_legroom_normal</i>
    <div class="caption">airline seat legroom normal</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_none</i>
    <div class="caption">filter none</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">more</i>
    <div class="caption">more</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_1</i>
    <div class="caption">filter 1</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_weak</i>
    <div class="caption">hdr weak</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_6</i>
    <div class="caption">filter 6</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_7</i>
    <div class="caption">filter 7</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sim_card_alert</i>
    <div class="caption">sim card alert</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sd_card</i>
    <div class="caption">sd card</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">notifications_off</i>
    <div class="caption">notifications off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_center_focus</i>
    <div class="caption">filter center focus</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">desktop_mac</i>
    <div class="caption">desktop mac</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">computer</i>
    <div class="caption">computer</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">cast_connected</i>
    <div class="caption">cast connected</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9148px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">cast</i>
    <div class="caption">cast</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">near_me</i>
    <div class="caption">near me</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_arrow_left</i>
    <div class="caption">keyboard arrow left</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_arrow_down</i>
    <div class="caption">keyboard arrow down</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard</i>
    <div class="caption">keyboard</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">casino</i>
    <div class="caption">casino</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hot_tub</i>
    <div class="caption">hot tub</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">golf_course</i>
    <div class="caption">golf course</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">free_breakfast</i>
    <div class="caption">free breakfast</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 11556px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">nature</i>
    <div class="caption">nature</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 15660px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">notifications_active</i>
    <div class="caption">notifications active</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">power</i>
    <div class="caption">power</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">priority_high</i>
    <div class="caption">priority high</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_drama</i>
    <div class="caption">filter drama</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">gradient</i>
    <div class="caption">gradient</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">flip</i>
    <div class="caption">flip</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">flash_on</i>
    <div class="caption">flash on</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">flash_off</i>
    <div class="caption">flash off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">flash_auto</i>
    <div class="caption">flash auto</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">flare</i>
    <div class="caption">flare</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_vintage</i>
    <div class="caption">filter vintage</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 11060px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_tilt_shift</i>
    <div class="caption">filter tilt shift</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">exposure_plus_2</i>
    <div class="caption">exposure plus 2</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_legroom_extra</i>
    <div class="caption">airline seat legroom extra</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_individual_suite</i>
    <div class="caption">airline seat individual suite</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_flat_angled</i>
    <div class="caption">airline seat flat angled</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 14192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airline_seat_flat</i>
    <div class="caption">airline seat flat</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_rotate</i>
    <div class="caption">crop rotate</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">beach_access</i>
    <div class="caption">beach access</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">all_inclusive</i>
    <div class="caption">all inclusive</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">airport_shuttle</i>
    <div class="caption">airport shuttle</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 15112px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">ac_unit</i>
    <div class="caption">ac unit</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_8</i>
    <div class="caption">filter 8</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">chevron_left</i>
    <div class="caption">chevron left</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">chevron_right</i>
    <div class="caption">chevron right</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">live_tv</i>
    <div class="caption">live tv</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">pin_drop</i>
    <div class="caption">pin drop</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">indeterminate_check_box</i>
    <div class="caption">indeterminate check box</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 12052px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tune</i>
    <div class="caption">tune</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_7</i>
    <div class="caption">filter 7</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_6</i>
    <div class="caption">filter 6</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_5</i>
    <div class="caption">filter 5</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_4</i>
    <div class="caption">filter 4</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_3</i>
    <div class="caption">filter 3</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10812px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_2</i>
    <div class="caption">filter 2</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">people_outline</i>
    <div class="caption">people outline</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">people</i>
    <div class="caption">people</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_parking</i>
    <div class="caption">local parking</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">add_a_photo</i>
    <div class="caption">add a photo</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">security</i>
    <div class="caption">security</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">network_check</i>
    <div class="caption">network check</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sentiment_satisfied</i>
    <div class="caption">sentiment satisfied</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sentiment_very_dissatisfied</i>
    <div class="caption">sentiment very dissatisfied</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 15784px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">notifications_none</i>
    <div class="caption">notifications none</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10936px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">filter_none</i>
    <div class="caption">filter none</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_arrow_up</i>
    <div class="caption">keyboard arrow up</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_backspace</i>
    <div class="caption">keyboard backspace</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">person_pin_circle</i>
    <div class="caption">person pin circle</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 13096px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">person_pin</i>
    <div class="caption">person pin</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">laptop</i>
    <div class="caption">laptop</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">mms</i>
    <div class="caption">mms</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">do_not_disturb</i>
    <div class="caption">do not disturb</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 14316px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">disc_full</i>
    <div class="caption">disc full</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">details</i>
    <div class="caption">details</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">dehaze</i>
    <div class="caption">dehaze</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 10688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_square</i>
    <div class="caption">crop square</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10068px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">blur_off</i>
    <div class="caption">blur off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brightness_4</i>
    <div class="caption">brightness 4</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phonelink_off</i>
    <div class="caption">phonelink off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">power_input</i>
    <div class="caption">power input</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">router</i>
    <div class="caption">router</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 9520px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">scanner</i>
    <div class="caption">scanner</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brightness_2</i>
    <div class="caption">brightness 2</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_movies</i>
    <div class="caption">local movies</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">room_service</i>
    <div class="caption">room service</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">pool</i>
    <div class="caption">pool</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">kitchen</i>
    <div class="caption">kitchen</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">brightness_3</i>
    <div class="caption">brightness 3</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 10192px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">broken_image</i>
    <div class="caption">broken image</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">grid_on</i>
    <div class="caption">grid on</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 10564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">crop_landscape</i>
    <div class="caption">crop landscape</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">event_note</i>
    <div class="caption">event note</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">event_busy</i>
    <div class="caption">event busy</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 14440px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">event_available</i>
    <div class="caption">event available</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_paused</i>
    <div class="caption">phone paused</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_missed</i>
    <div class="caption">phone missed</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">plus_one</i>
    <div class="caption">plus one</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">poll</i>
    <div class="caption">poll</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">public</i>
    <div class="caption">public</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 15908px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  social col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">person_outline</i>
    <div class="caption">person outline</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">fullscreen_exit</i>
    <div class="caption">fullscreen exit</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">fullscreen</i>
    <div class="caption">fullscreen</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_capslock</i>
    <div class="caption">keyboard capslock</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_hide</i>
    <div class="caption">keyboard hide</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_return</i>
    <div class="caption">keyboard return</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_tab</i>
    <div class="caption">keyboard tab</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 9396px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard_voice</i>
    <div class="caption">keyboard voice</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 13892px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">subdirectory_arrow_right</i>
    <div class="caption">subdirectory arrow right</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 13892px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">subdirectory_arrow_left</i>
    <div class="caption">subdirectory arrow left</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 13892px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">refresh</i>
    <div class="caption">refresh</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 13892px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">more_vert</i>
    <div class="caption">more vert</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">first_page</i>
    <div class="caption">first page</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">expand_more</i>
    <div class="caption">expand more</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">expand_less</i>
    <div class="caption">expand less</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 13768px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">close</i>
    <div class="caption">close</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">cancel</i>
    <div class="caption">cancel</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">arrow_upward</i>
    <div class="caption">arrow upward</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">arrow_forward</i>
    <div class="caption">arrow forward</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">arrow_drop_up</i>
    <div class="caption">arrow drop up</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">arrow_drop_down_circle</i>
    <div class="caption">arrow drop down circle</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">terrain</i>
    <div class="caption">terrain</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">subway</i>
    <div class="caption">subway</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">streetview</i>
    <div class="caption">streetview</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">store_mall_directory</i>
    <div class="caption">store mall directory</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">satellite</i>
    <div class="caption">satellite</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">restaurant_menu</i>
    <div class="caption">restaurant menu</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">restaurant</i>
    <div class="caption">restaurant</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">rate_review</i>
    <div class="caption">rate review</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 13220px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">place</i>
    <div class="caption">place</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">gamepad</i>
    <div class="caption">gamepad</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">headset</i>
    <div class="caption">headset</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">headset_mic</i>
    <div class="caption">headset mic</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 9272px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  hardware col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">keyboard</i>
    <div class="caption">keyboard</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 13344px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">zoom_out_map</i>
    <div class="caption">zoom out map</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 13344px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">transfer_within_a_station</i>
    <div class="caption">transfer within a station</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 13344px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">tram</i>
    <div class="caption">tram</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 13344px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">train</i>
    <div class="caption">train</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 13344px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">traffic</i>
    <div class="caption">traffic</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">arrow_drop_down</i>
    <div class="caption">arrow drop down</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">arrow_downward</i>
    <div class="caption">arrow downward</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">arrow_back</i>
    <div class="caption">arrow back</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 13644px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  navigation col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">apps</i>
    <div class="caption">apps</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_locked</i>
    <div class="caption">phone locked</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_in_talk</i>
    <div class="caption">phone in talk</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_forwarded</i>
    <div class="caption">phone forwarded</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">phone_bluetooth_speaker</i>
    <div class="caption">phone bluetooth speaker</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">personal_video</i>
    <div class="caption">personal video</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_hotel</i>
    <div class="caption">local hotel</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_hospital</i>
    <div class="caption">local hospital</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_grocery_store</i>
    <div class="caption">local grocery store</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_gas_station</i>
    <div class="caption">local gas station</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_florist</i>
    <div class="caption">local florist</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_drink</i>
    <div class="caption">local drink</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_dining</i>
    <div class="caption">local dining</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_convenience_store</i>
    <div class="caption">local convenience store</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_car_wash</i>
    <div class="caption">local car wash</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_cafe</i>
    <div class="caption">local cafe</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 396px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_bar</i>
    <div class="caption">local bar</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 264px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_atm</i>
    <div class="caption">local atm</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_airport</i>
    <div class="caption">local airport</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 12724px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_activity</i>
    <div class="caption">local activity</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">ondemand_video</i>
    <div class="caption">ondemand video</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 14564px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">no_encryption</i>
    <div class="caption">no encryption</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">looks_3</i>
    <div class="caption">looks 3</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_boat</i>
    <div class="caption">directions boat</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_bike</i>
    <div class="caption">directions bike</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions</i>
    <div class="caption">directions</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">beenhere</i>
    <div class="caption">beenhere</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">add_location</i>
    <div class="caption">add location</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 15360px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">spa</i>
    <div class="caption">spa</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">smoking_rooms</i>
    <div class="caption">smoking rooms</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">smoke_free</i>
    <div class="caption">smoke free</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 15236px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  places col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">rv_hookup</i>
    <div class="caption">rv hookup</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">ev_station</i>
    <div class="caption">ev station</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">edit_location</i>
    <div class="caption">edit location</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_walk</i>
    <div class="caption">directions walk</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_transit</i>
    <div class="caption">directions transit</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_subway</i>
    <div class="caption">directions subway</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_run</i>
    <div class="caption">directions run</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_railway</i>
    <div class="caption">directions railway</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_car</i>
    <div class="caption">directions car</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 12476px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">directions_bus</i>
    <div class="caption">directions bus</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_mall</i>
    <div class="caption">local mall</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_library</i>
    <div class="caption">local library</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 12848px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_laundry_service</i>
    <div class="caption">local laundry service</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 1056px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">layers_clear</i>
    <div class="caption">layers clear</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 924px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">layers</i>
    <div class="caption">layers</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hotel</i>
    <div class="caption">hotel</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 12600px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">flight</i>
    <div class="caption">flight</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 0px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">check_box</i>
    <div class="caption">check box</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 132px; top: 16332px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  toggle col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">check_box_outline_blank</i>
    <div class="caption">check box outline blank</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 12972px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  maps col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">local_printshop</i>
    <div class="caption">local printshop</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">iso</i>
    <div class="caption">iso</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">landscape</i>
    <div class="caption">landscape</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">leak_add</i>
    <div class="caption">leak add</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">leak_remove</i>
    <div class="caption">leak remove</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">lens</i>
    <div class="caption">lens</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 660px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">linked_camera</i>
    <div class="caption">linked camera</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 792px; top: 11308px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">looks</i>
    <div class="caption">looks</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 1056px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_8">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sync_problem</i>
    <div class="caption">sync problem</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 924px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_7">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sync_disabled</i>
    <div class="caption">sync disabled</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 792px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_6">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sync</i>
    <div class="caption">sync</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 660px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_5">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sms_failed</i>
    <div class="caption">sms failed</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: block; position: absolute; left: 528px; top: 14688px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  notification col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">sms</i>
    <div class="caption">sms</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 0px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_0">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">grid_off</i>
    <div class="caption">grid off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 132px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_1">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">grid_on</i>
    <div class="caption">grid on</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 264px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_2">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_off</i>
    <div class="caption">hdr off</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 396px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_3">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_on</i>
    <div class="caption">hdr on</div>
  </div>
</div>
</div><div class="itemcontainer" style="display: none; position: absolute; left: 528px; top: 11184px; width: 132px;"><template bind="" class="itemtemplate">
<div class="item {{ selected }} {{ model.group_id }} {{ column_class }}">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}">
      <div class="new-badge">New</div>
    </template>
    <i class="md-icon dp48">{{ model.ligature }}</i>
    <div class="caption">{{ model.name }}</div>
  </div>
</div>
</template>
<div class="item  image col_4">
  <div class="backgroundBox"></div>
  <div class="itemBox" vertical="" layout="" center="">
    <template if="{{ model.is_new }}"></template>
    <i class="md-icon dp48">hdr_strong</i>
    <div class="caption">hdr strong</div>
  </div>
</div>
</div></div>`,{
    ignoreWhitespace: false,
    xmlMode: false,
    lowerCaseTags: false
});
var fruits = [];
$('#itempool i').each(function(i, elem) {
    fruits[i] = $(this).text();
  });
console.log(fruits);