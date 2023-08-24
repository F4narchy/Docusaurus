---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# About

## Zammad

Do you receive many emails and want to answer them with a team of agents?

You’re going to love [**Zammad**](https://zammad.org/)!

Zammad is a web based open source helpdesk/customer support system with many features to manage customer communication via several channels like telephone, facebook, twitter, chat and emails. It is distributed under version 3 of the GNU AFFERO General Public License (GNU AGPLv3).

The code is open source, and [**available on GitHub**](https://github.com/zammad/zammad)!

# Prerequisites

## Software

### Client requirements

Please note that, while Zammad being a web application, there’s some requirements for your clients. This ensures that Zammad works as expected.

#### Supported Browsers

| **Browser** 	| **Remarks** 	|
|:---:	|:---:	|
| Firefox 78+ 	| (ESR) 	|
| (Google) Chrome 83+ 	| This also applies for all Chromium based Browsers like Microsoft Edge 	|
| Opera 69+ 	| (based on Chromium 83) 	|
| Microsoft Internet Explorer 11 	| ⚠️ Deprecated, will be removed with Zammad 7 	|
| Safari 11 	|   	|

:::warning Danger
⚠️ **Deprecation warning** ⚠️

Zammad 7 will no longer support Internet Explorer 11 environments. Users using IE will be forced to use a different browser.
:::

:::note Note
Zammad heavily uses Javascript which makes it a hard requirement.

Browser addons that hook into page content may interfere with Zammads function which is not a bug.
Google Chromes translation module is known to do odd things to especially state names. Use Zammads internal translations instead.
:::

#### Network requirements

Zammad uses web sockets. Some application firewalls may filter these connections. This may lead to decreased browser performance.

There’s a fallback to Ajax which causes a higher application server load and thus should be avoided.

:::note Note
The “Core workflows” feature of Zammad comes with an Ajax Mode which can be activated separately in case you’re having issues with field selections.
:::

### Server requirements

If you want to install Zammad, you need the following software.

:::note Note
Most of the software versions listed below (unless stated as specific version) are minimum requirements of Zammad. We strongly encourage you to use most current possible versions that are not end of life.
:::

#### Ruby Programming Language

:::tip Hint
🤓 **Only relevant for source code installations**

Docker and package installations provide the required ruby dependencies!
:::

Zammad requires Ruby. All required rubygems like ruby on rails are listed in the Gemfile.
The following Ruby version is supported : `Ruby 3.1.3`

| **Zammad** 	| **Ruby** 	|
|:---:	|:---:	|
| 5.4+ 	| 3.1.3 	|
| 5.2 - 5.3 	| 3.0.4 	|
| 5.0 - 5.1 	| 2.7.4 	|
| 3.4.1 - 4.1 	| 2.6.6 	|
| 3.4.0 	| 2.6.5 	|
| 3.1 - 3.3 	| 2.5.5 	|
| 2.5 - 3.0 	| 2.4.4 	|

#### Supported distributions

Below you can find all distributions Zammad provides packages for.

| **Distribution** 	| **Versions** 	|
|:---:	|:---:	|
| CentOS / RHEL 	| 7 & 8 	|
| Debian 	| 10, 11 & 12 	|
| OpenSuSE / SLES 	| Leap 42.3 / 12; Leap 15.x / 15 	|
| Ubuntu 	| 16.04, 18.04, 20.04 & 22.04 	|
| 3.4.0 	| 2.6.5 	|
| 3.1 - 3.3 	| 2.5.5 	|
| 2.5 - 3.0 	| 2.4.4 	|

:::caution Warning
⚠ **SuSE users be aware**

Due to the age of SLES12 / Leap 42.3 you may no longer be able to satisfy all (soft) dependencies of Zammad.

Note that SuSE Tumbleweed does not meet Zammad requirements and thus is not supported!
:::

:::note Note
🤓 **What about my specific distribution?! It’s so cool!**

If you distribution is not listed, you can still install Zammad. For this you can either use [**Docker-Compose**](https://docs.zammad.org/en/latest/install/docker-compose.html) or [**Source**](https://docs.zammad.org/en/latest/install/source.html) installation.

We try to provide all current distributions that are supported by [**Packager.io**](https://packager.io/). This means that we can’t always provide support for your favorite system.
:::

#### Package Dependencies

The below dependencies need to be installed on your system. If you’re using the package install, the packages below will automatically installed with the Zammad-Package.

    # Debian 10 & 11, Ubuntu 16.04, 18.04 & 20.04
    $ apt install libimlib2

    # openSUSE
    $ zypper install imlib2

    # CentOS 7 & 8
    $ yum install epel-release
    $ yum install imlib2

:::note Note
`libimlib2-dev` **or** `imlib2-devel` are no longer required.
However: If you have to use `bundle install` for e.g. custom Gems or development, you’ll need to install it!
:::

#### Database Server

Zammad will store all content in a Database. You can choose between the following database servers:

- PostgreSQL 9.3+
- MySQL 5.7+ / MariaDB 10.3+ (⚠️ deprecated with Zammad 7.0+)

:::warning Danger
Support for MySQL/MariaDB will be dopped in Zammad 7.0 upwards. Make sure to migrate your existing instance of Zammad to PostgreSQL before that update.

Please have a look at our guide on how to migrate an existing MySQL/MariaDB instance to PostgreSQL: [**Migrate to PostgreSQL server**](https://docs.zammad.org/en/latest/appendix/migrate-to-postgresql.html).
:::

:::caution Warning
**Required configuration for MySQL/MariaDB** :

- Use `UTF-8` encoding - `utf8mb4` for example will fail!
- Set `max_allowed_packet` to a value larger than the default of 4 MB (64 MB+ recommended).

You may also want to consider the following settings for your MySQL server:

    innodb_file_format = Barracuda
    innodb_file_per_table = on
    innodb_default_row_format = dynamic
    innodb_large_prefix = 1
    innodb_file_format_max = Barracuda
:::

#### Node.js

:::note Note
This soft dependency was introduced with Zammad 5.0.
Package installations come pre-bundled with the correct NodeJS version. Unless you require NodeJS on your machine for other projects, a manual installation is not required.
:::

Node.js is required for asset compiling.

:::tip Hint
🔨 **No changes to JS or CSS files ?**

If you don’t require to change any javascript or stylesheed files you’ll be fine without this package. It’s only required if you have to run rake `assets:precompile` on your system.

:::caution Warning
Node.js is required on source code installations.
:::

:::