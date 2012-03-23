# In production.rb if you are getting messages about email failing, turns off ssl
config.action_mailer.smtp_settings = { :enable_starttls_auto => false }
