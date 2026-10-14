<?php

/**
 * @file
 * Provides an additional config form for theme settings.
 */

use Drupal\Core\Extension\Extension;
use Drupal\Core\Extension\ExtensionDiscovery;
use Drupal\system\Controller\ThemeController;
use Drupal\Core\Theme\ThemeManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\Form\FormStateInterface;
use Drupal\color\ColorSystemBrandingBlockAlter;
use \Drupal\paragraphs\Entity\Paragraph;


/**
 * Implements hook_form_system_theme_settings_alter() for settings form.
 * 
 */
function news_pro_form_system_theme_settings_alter(array &$form, FormStateInterface $form_state) {
  /*Core theme  settings*/

  include 'animations.inc';
  
  /*Core theme  settings*/
  $form['logo']['#group'] = 'visibility';
  $form['logo']['#title'] = t('Logo Image');
  $form['logo']['#weight'] = -995;
  $form['favicon']['#group'] = 'visibility';
  $form['favicon']['#weight'] = -994;

  $form['logo']['#open'] = TRUE;
  $form['favicon']['#open'] = TRUE;
  unset($form['theme_settings']); 
  unset($form['bootstrap_barrio_source']); 

  $form['visibility'] = [
    '#type' => 'vertical_tabs',
    '#title' => t('News Pro Settings'),
    '#weight' => -999,
  ];
  
  //general settings 
  $form['general'] = [
    '#type' => 'details',
    '#title' => t('General Options'),
    '#weight' => -999,
    '#group' => 'visibility',
    '#open' => FALSE,
  ];
  //loader
  $form['general']['loader-stricky'] = array(
    '#type' => 'fieldset',
    '#title' => t('Page Pre-Loader'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['general']['loader-stricky']['loader'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('For Pre-Loader'),
    '#default_value' => theme_get_setting('loader'),
  );
  // login page 
  $form['general']['login'] = array(
    '#type' => 'details',
    '#title' => t('Login Page Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['general']['login']['login_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Login page Title'),
    '#default_value' => theme_get_setting('login_title'),
    '#description'   => t("Please enter the title of Login Page."),
  );
  $form['general']['login']['login_content'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Description'),
    '#default_value' => theme_get_setting('login_content'),
    '#description'   => t("Please enter the content to be shown on left side."),
  );

  // register page 
  $form['general']['register'] = array(
    '#type' => 'details',
    '#title' => t('Register Page Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['general']['register']['register_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Register page Title'),
    '#default_value' => theme_get_setting('register_title'),
    '#description'   => t("Please enter the title of Login Page."),
  );
  $form['general']['register']['register_content'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Description'),
    '#default_value' => theme_get_setting('register_content'),
    '#description'   => t("Please enter the content to be shown on left side."),
  );

  // reset password page 
  $form['general']['r_pass'] = array(
    '#type' => 'details',
    '#title' => t('Reset Password Page Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['general']['r_pass']['r_pass_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Reset Password page Title'),
    '#default_value' => theme_get_setting('r_pass_title'),
    '#description'   => t("Please enter the title of Reset Password Page."),
  );
  $form['general']['r_pass']['r_pass_content'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Description'),
    '#default_value' => theme_get_setting('r_pass_content'),
    '#description'   => t("Please enter the content to be shown on left side."),
  );

  // 404 and 403 page 
  $form['general']['error_page'] = array(
    '#type' => 'details',
    '#title' => t('404 and 403 Page Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['general']['error_page']['e_image'] = [
    '#type' => 'managed_file',
    '#title'    => t('Banner Background Image'),
    '#default_value' => theme_get_setting('e_image'),
    '#upload_location' => 'public://',
    '#description' => t('Choose background image for 404 and 403 page banner'),
  ];
  $form['general']['error_page']['e_404_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('404 page title'),
    '#default_value' => theme_get_setting('e_404_title'),
    '#description'   => t("Please enter the banner title to be shown in 404 page."), 
  );
  $form['general']['error_page']['e_404_content'] = array(
    '#type'          => 'textarea',
    '#title'         => t('404 page content'),
    '#default_value' => theme_get_setting('e_404_content'),
    '#description'   => t("Please enter the content to be shown in 404 page."), 
  );
  $form['general']['error_page']['e_403_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('403 page title'),
    '#default_value' => theme_get_setting('e_403_title'),
    '#description'   => t("Please enter the banner title to be shown in 403 page."), 
  );
  $form['general']['error_page']['e_403_content'] = array(
    '#type'          => 'textarea',
    '#title'         => t('403 page content'),
    '#default_value' => theme_get_setting('e_403_content'),
    '#description'   => t("Please enter the content to be shown in 403 page."),
  );
  // Maintanence and coming soon Section Start
  $form['general']['maintenance_mode'] = array(
    '#type' => 'details',
    '#title' => t('Maintenance Mode and Coming Soon Settings'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['general']['maintenance_mode']['mode_type'] = array(
    '#type'        => 'select',
    '#title'       => t('Mode Type'),
    '#options'     => ['1' => t('Maintenance Mode'),'2' => t('Coming Soon')],
    '#default_value' => theme_get_setting('mode_type'),
    '#description'   => t("Please select any one mode to change the content of Maintanence page. If Coming soon mode selected, while site under Maintanence, Coming Soon page content will be displayed"),
  );
  $form['general']['maintenance_mode']['maintenance_mode_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Maintenance Mode Title'),
    '#default_value' => theme_get_setting('maintenance_mode_title'),
    '#description'   => t("Please enter the title of Maintanence Page."),
  );
  $form['general']['maintenance_mode']['maintenance_mode_description'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Maintenance Mode Description'),
    '#default_value' => theme_get_setting('maintenance_mode_description'),
    '#description'   => t("Please enter the description of Maintanence Page."),
  );
  $form['general']['maintenance_mode']['bg_image_m'] = [
    '#type' => 'managed_file',
    '#title'    => t('background image'),
    '#default_value' => theme_get_setting('bg_image_m'),
    '#upload_location' => 'public://',
    '#description' => t('Choose background image for maintenance and coming soon pages'),
  ];
  /*comingsoon*/
  $form['general']['maintenance_mode']['comingsoon_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Comingsoon Mode Title'),
    '#default_value' => theme_get_setting('comingsoon_title'),
    '#description'   => t("Please enter the title of Comingsoon Page."),
  );
  $form['general']['maintenance_mode']['date'] = [
    '#type' => 'date',
    '#title' => t('Launch Date'),
    '#description' => t('Please enter the date of site coming to alive, This date will be displayed in Coming soon page'),
    '#default_value' => theme_get_setting('date'),
  ];
  $form['general']['maintenance_mode']['custom_message'] = [
    '#type' => 'textarea',
    '#title' => t('Date Expired custom message'),
    '#description' => t('Please enter the sub title, which will be showed in coming soon page'),
    '#default_value' => theme_get_setting('custom_message'),
  ];
  // Header Style
  $form['header'] = [
    '#type' => 'details',
    '#title' => t('Header Options'),
    '#weight' => -998,
    '#group' => 'visibility',
    '#open' => FALSE,
  ];
  $form['header']['header_variation'] = [
    '#title' => 'Header', 
    '#type' => 'select',
    '#options' => array(
      'header-1' => 'Header Style 1',
      'header-2' => 'Header Style 2',
      'header-3' => 'Header Style 3',
      'header-4' => 'Header Style 4',
    ),
    '#default_value' => theme_get_setting('header_variation'),
    '#description' => t('Please choose your prefered header style'),
  ];
  $form['header']['sticky'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Sticky menu'),
    '#default_value' => theme_get_setting('sticky'),
  );
  $form ['header']['show_hamburger'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Hamburger Sidebar'),
    '#default_value' => theme_get_setting('show_hamburger'),
  );
  $form ['header']['show_date'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Date'),
    '#default_value' => theme_get_setting('show_date'),
  );
  $form ['header']['show_weather'] = array(
    '#type'          => 'checkbox',
    '#title'         => t('Weather'),
    '#default_value' => theme_get_setting('show_weather'),
  );
  $form['header']['contact'] = array(
    '#type' => 'details',
    '#title' => t('Contact Details'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['header']['contact']['contact_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Contact Title'),
    '#default_value' => theme_get_setting('contact_title'),
    '#description'   => t("Please enter the title for the information sidebar."),
  );
  $form['header']['contact']['contact_description'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Contact Description'),
    '#default_value' => theme_get_setting('contact_description'),
    '#description'   => t("Please enter the description for the information sidebar."),
  );
  $form['header']['contact']['mail'] = array(
    '#type'          => 'details',
    '#title'         => t('Email'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );
  $form['header']['contact']['mail']['mail_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Email Address Title'),
    '#default_value' => theme_get_setting('mail_title'),
    '#description'   => t("Please enter email title to shown in the site."),
  );
  $form['header']['contact']['mail']['mail_address'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Email Address'),
    '#default_value' => theme_get_setting('mail_address'),
    '#description'   => t("Please enter email address to shown in the site."),
  );
  $form['header']['contact']['phone'] = array(
    '#type'          => 'details',
    '#title'         => t('Phone'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );  
  $form['header']['contact']['phone']['ph_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Phone Number Title'),
    '#default_value' => theme_get_setting('ph_title'),
    '#description'   => t("Please enter phone number title to shown in the site."),
  );
  $form['header']['contact']['phone']['ph_number'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Phone Number'),
    '#default_value' => theme_get_setting('ph_number'),
    '#description'   => t("Please enter phone number to shown in the site."),
  );
  // footer Section Start
  $form['footer'] = array(
    '#type' => 'details',
    '#title' => t('Footer Options'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
    '#group' => 'visibility',
    '#weight' => -997,
  );
  $form['footer']['footer_logo'] = array(
  '#type' => 'managed_file',
  '#title'    => t('Footer Logo'),
  '#default_value' => theme_get_setting('footer_logo'),
  '#upload_location' => 'public://',
  '#description' => t('Upload your site logo to show in footer.'),
  );
  $form['footer']['c_description'] = array(
    '#type' => 'textarea',
    '#title' => t('Description/Information'),
    '#default_value' => theme_get_setting('c_description'),
    '#description'   => t("Please enter your description/info here."),
  );
  $form ['footer']['copyrights'] = array(
  '#type'          => 'text_format',
  '#title'         => t('Copyrights'),
  '#default_value' => theme_get_setting('copyrights')['value'],
  '#description'   => t("Please enter your coptrights content here."),
  );
  // social media links
  $form['social'] = array(
    '#type' => 'details',
    '#title' => t('Social Media Links'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
    '#group' => 'visibility',
    '#weight' => -995,
  );
  $form['social']['social_links_title'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Social Links Title'),
    '#default_value' => theme_get_setting('social_links_title'),
    '#description'   => t("Please enter title for social media links in information sidebar"),
  );
  $form['social']['facebook'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Facebook'),
    '#default_value' => theme_get_setting('facebook'),
    '#description'   => t("Please enter your Facebook profile link"),
  );
  $form['social']['twitter'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Twitter'),
    '#default_value' => theme_get_setting('twitter'),
    '#description'   => t("Please enter your Twitter profile link"),
  ); 
  $form['social']['instagram'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Instagram'),
    '#default_value' => theme_get_setting('instagram'),
    '#description'   => t("Please enter your Instagram profile link"),
  );
  // custum css Section Start
  $form['custom_css'] = array(
    '#type' => 'details',
    '#title' => t('Custom CSS'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
    '#group' => 'visibility',
    '#open' => FALSE,
    '#weight' => -993,
  );
  $form['custom_css']['styles'] = array(
    '#type'          => 'textarea',
    '#title'         => t('Custom Style'),
    '#default_value' => theme_get_setting('styles'),
    '#description'   => t("Place your custom style for your site."),
  );
  $form['#submit'][] = 'news_pro_form_submit';
}
/**
 * Implements hook_form_submit().
 */
function news_pro_form_submit(&$form, $form_state) {

  // Maintenance page image
  if ($file_id = $form_state->getValue(['bg_image_m', '0'])) {
    $file = \Drupal::entityTypeManager()->getStorage('file')->load($file_id);
    $file->setPermanent();
    $file->save();
  }

  // Footer_logo
  if ($file_id = $form_state->getValue(['footer_logo', '0'])) {
    $file = \Drupal::entityTypeManager()->getStorage('file')->load($file_id);
    $file->setPermanent();
    $file->save();
  }

  // Error page banner image
  if ($file_id = $form_state->getValue(['e_image', '0'])) {
    $file = \Drupal::entityTypeManager()->getStorage('file')->load($file_id);
    $file->setPermanent();
    $file->save();
  }
}
