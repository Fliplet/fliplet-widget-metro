window.ui = window.ui || {};
ui.uiFreewallVertical = {};

Fliplet.Widget.instance('metro', function(data) {
  var $container = $(this);

  function authenticateImages() {
    FlipletMetroUtils.forEach(data.items, function(item) {
      if (!FlipletMetroUtils.get(item, 'imageConf.url') || !Fliplet.Media.isRemoteUrl(item.imageConf.url)) {
        return;
      }

      $container.find('[data-metro-item-id="' + item.id + '"] .metro-image').css({
        backgroundImage: 'url(' + Fliplet.Media.authenticate(item.imageConf.url) + ')'
      });
    });
  }

  function init() {
    var id = $container.data('metro-id');

    ui.uiFreewallVertical[id] = new UIFreewallVertical(data);
    UIFreewallVertical.loadMetro();

    $container.on('click', '.linked[data-metro-item-id]', function(event) {
      event.preventDefault();

      var itemID = $(this).data('metro-item-id');
      var itemData = FlipletMetroUtils.find(data.items, { id: itemID });

      if (!FlipletMetroUtils.isUndefined(FlipletMetroUtils.get(itemData, 'linkAction'))
        && !FlipletMetroUtils.isEmpty(FlipletMetroUtils.get(itemData, 'linkAction'))) {
        Fliplet.Navigate.to(itemData.linkAction);
      }
    });
    authenticateImages();
  }

  var debounceLoad = FlipletMetroUtils.debounce(init, 500);

  Fliplet().then(function() {
    Fliplet.Studio.onEvent(function(event) {
      if (event.detail.event === 'reload-widget-instance') {
        debounceLoad();
      }
    });
    init();
  });
});
