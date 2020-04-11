<form action="#"  class="formmain" method="post" enctype="multipart/form-data" id="c-form">
                      <div class="form-field">
                          <input type="text" placeholder="Name" name="name">
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                          <input type="text" placeholder="Email" name="email">
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                          <input type="text" placeholder="Phone" name="phone" id="intTextBox">
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                          <textarea name="message" placeholder="Message"></textarea>
                          <div class="error"></div>
                      </div>
                      <div class="form-field">
                        <div class="g-recaptcha" data-sitekey="[recaptcha key]"></div>
                        <div class="c-error error"></div>
                      </div>
                      <div class="form-field">
                           <input type="hidden" value="<?php echo  date("d/m/Y")." || ".date("h:i:sa"); ?>" name="date">
                          <input type="submit" value="submit" class="submit" name="submit">
                      </div>
                  </form>
