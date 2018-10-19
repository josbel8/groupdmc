<?php

drupal_add_library('angularjs', 'angularjs');

/**
 * Implements template_preprocess_html().
 */
function dmc_preprocess_html(&$variables) {
}

/**
 * Implements template_preprocess_page.
 */
function dmc_preprocess_page(&$variables) {
}

/**
 * Implements template_preprocess_node.
 */
function dmc_preprocess_node(&$variables) {
}

function dmc_link($vars) {
  // Allow #fragment links to be used via 'http://current/#fragment'
  if (strpos($vars['path'], 'http://current/#') === 0) {
    $vars['options']['fragment'] = str_replace('http://current/#', '', $vars['path']);
    $vars['path'] = '';
  }

  return '<a href="' . check_plain(url($vars['path'], $vars['options'])) . '"' . drupal_attributes($vars['options']['attributes']) . '>' . ($vars['options']['html'] ? $vars['text'] : check_plain($vars['text'])) . '</a>';
}
