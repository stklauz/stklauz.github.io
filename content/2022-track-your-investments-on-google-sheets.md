---
title: "Tracking investments using Google Sheets"
date: 2022-02-02T08:47:11+01:00
draft: false
page: false
# summary:

# Lists
keywords: 
tags:
categories:
  - "Others"
---

Last year I started my investment journey. As expected, after a few months I realized I had made a lot of mistakes when it came to my portfolio's management:

> Using **different apps** to buy **different assets** in **different currencies**, consequently, losing track of my portfolio's overall value, evolution and distribution.

Although I did try several apps (with a special shoutout to [Yahoo Finance](https://finance.yahoo.com/) which still holds a special place in my heart), I do have a soft spot for Excel and Google Sheets.

I needed an alternative that allowed me to track my portfolio and support all the different positions and currencies I used.

##### ➡️ [Finances Tracker Template (make a copy for yourself)](https://docs.google.com/spreadsheets/d/1cIyl64JaccHCNjFuyb4fpCPvHn_td6iAvj8fQpo2lIg/copy?usp=sharing)


![Snapshot of the Investment tracking sheet](/images/2022/investmenttracker.png)

#### What is this? 📈

This file is a template that you can use to monitor your investments, powered by the main dashboard (where you can see your general stats & distributions), positions, and holdings/transactions sheets.

I have also added a sheet where you can add a timeline for tracking your portfolio's progress over time.


#### Who is this for? 🤷‍♂️

Honestly, if you're not a day-trader or pro, just looking for a quick place to monitor your investments, this should fit your needs perfectly! No muss, no fuss, ready to withhold 1000+ transactions for a few years.

#### How does it work? ⚙️

Well, it's quite simple. To monitor your investments you have to:

* Add each transaction to the sheet (buy or sale). Within that transaction is important to specify the Tracker name (e.g. Apple = AAPL), amount, and price/share.
* Add a new position, along with its current value and closing value.

#### What do I win with this? 🏆

* **You'll be able to add any currency!**   
  Let's say you bought a stock or coin with another currency other than the one you're tracking your portfolio from? That can be easily specified by using the power of Google Finance to your advantage. On the example below, imagine you wanted to convert the value of your dollar stocks to euros:

  ```
  =$VALUE * GOOGLEFINANCE("CURRENCY:USDEUR")
  ```


* **You'll have an overview of your entire portfolio within a single currency!**   
  After converting all your investments, you'll be able to see the overall of your portfolio, which can also be quite helpful for your IRS (if you don't live in the USA)

#### What do I lose, compared with other apps? 😢

* **It's not 100% accurate**   
  but from my experience, 100% accuracy isn't a thing among stock trackers

* **I takes a bit more management**   
  Yes, you need to save a few formulas! and yes, you need to do a lot of manual configuration. But I promise it's just at the beginning! If you stay consistent with your portfolio, this also shouldn't be a problem, cause you'll just be repeating what you already set up.

* **Google Finance might not support every tracker!**   
  Yes, it's true, google finance's function is fallible. That's why there are a few folks making money out of Google Sheets plugins to track crypto. 👀 But honestly, you don't need that :) If the problem is crypto, you can try either of the examples below to your advantage!

  ```
  // importing from Cryptoprices.cc api
  =VALUE(SUBSTITUTE(IMPORTDATA("https://cryptoprices.cc/BTC/"); "."; ","))

  // importing from GoogleFinance's html
  =VALUE(SUBSTITUTE(SUBSTITUTE(IMPORTXML("https://www.google.com/finance/quote/BTC-EUR";"//div[@data-source='BTC']/div/div/div[1]/div/span/div/div");"."; ",");"$";"") )

  // importing from coinmarketcap.com
  =VALUE(SUBSTITUTE(SUBSTITUTE(IMPORTXML("https://coinmarketcap.com/currencies/dogecoin/";"//div[@class='priceValue ']/span");"."; ",");"$";""))

  ```

#### How do I make the timeline work? 🗓

That's completely possible by saving your closing values to the timeline sheet. But do you have to do it by hand? Nope! 😁

How does it work? Simply go to the "⚙️. Timeline Macro" sheet at the bottom, and copy that script. Then go to **Extensions** > **App Scripts**, and paste it. (You may already have this done by copying the sheet!) That's half of it.

The other half is triggering it automatically. Within the **App Scripts**, on the left sidebar, go to **Triggers** > **Add Trigger** > **Select Event Source** > **Time-Driven**. This will allow you to run the script on a timely basis. Now, how often you want it, that's for you to decide. I like to set a **Day timer** working during the night so i can my results by the morning. And that's it. 

Give it a test run to see if everything is working! If it isn't, take a look at the script, I tried to make it as simple as possible, so you could modify it easily.

The most common problems typically are:

* Different sheet names
* Changing where the dashboard cells are
* etc.

Once that's running, your timeline charts will immediately start to fill! :)

#### Do you have feedback? 💬

Please send it directly to me! You can reach me via [Twitter](https://twitter.com/claudiacvlho).
Thank you, folks! Happy new year! 🎉
