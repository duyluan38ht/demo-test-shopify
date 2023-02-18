const mix = require('laravel-mix');

mix.js(
   'src/js/main/*.js', 'assets/main.js'
   )
   .sass('src/scss/main/main.scss', 'assets/main.css');

// Mix copy css
mix.copy('src/scss/default/*.css','assets')
.copy('src/js/default/cart-drawer.js', 'assets/cart-drawer.js')
.copy('src/js/default/cart-notification.js', 'assets/cart-notification.js')
.copy('src/js/default/cart.js', 'assets/cart.js')
.copy('src/js/default/constants.js', 'assets/constants.js')
.copy('src/js/default/customer.js', 'assets/customer.js')
.copy('src/js/default/details-disclosure.js', 'assets/details-disclosure.js')
.copy('src/js/default/details-modal.js', 'assets/details-modal.js')
.copy('src/js/default/facets.js', 'assets/facets.js')
.copy('src/js/default/global.js', 'assets/global.js')
.copy('src/js/default/magnify.js', 'assets/magnify.js')
.copy('src/js/default/main-search.js', 'assets/main-search.js')
.copy('src/js/default/media-gallery.js', 'assets/media-gallery.js')
.copy('src/js/default/password-modal.js', 'assets/password-modal.js')
.copy('src/js/default/product-model.js', 'assets/product-model.js')
.copy('src/js/default/pubsub.js', 'assets/pubsub.js')
.copy('src/js/default/quick-add.js', 'assets/quick-add.js')
.copy('src/js/default/search-form.js', 'assets/search-form.js')
.copy('src/js/default/share.js', 'assets/share.js')
.copy('src/js/default/show-more.js', 'assets/show-more.js')
.copy('src/js/default/theme-editor.js', 'assets/theme-editor.js')
.copy('src/js/default/predictive-search.js', 'assets/predictive-search.js');
