---
title: "Tracking investments with Google Sheets"
date: 2022-01-15T08:47:11+01:00
draft: true
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

Although I did try a number of apps (with a special shoutout to [Yahoo Finance](https://finance.yahoo.com/) that holds a special place in my heart), I do have a soft spot for Excel and Google Sheets.

I need an alternative that allowed me to track my portfolio supporting all my different positions and currencies.

➡️ Hence this [Finances Tracker Template](https://docs.google.com/spreadsheets/d/1DSwYg3BQtt0WewUGQSJd3IUX7oeGfYgwyRnDdZdciXk/edit?usp=sharing), that you can see and duplicate!

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS3RbwJ7-Oi0oIlxqX5VNai64_SHBLUXx4ISCGN4cEtRW25I4KNHOqSAaoKppaNEIY6GXt1GUjl3Z5b/pubhtml?widget=true&amp;headers=false"></iframe>

#### What is this?

This file is a template that you can use to monitor your investments, powered by a main dashboard (where you can see your general stats & distributions), your positions and your holdings/transactions. 

I have also added a sheet where you can add a timeline for tracking your portfolio's progress over time, although I won't cover that today.

#### How does it work?

Well, it's quite simple. In order to monitor your moneys you have to:

* Add each transaction that you do to the sheet, buy or sale. Within that transaction is important to specify the Tracker name (e.g. Apple = AAPL), amount and price/share.
* Add a new position.

#### Who is this for?

Honestly, if your not a day-trader or pro, just looking for a quick place to monitor your investments from, this should fit your needs perfectly! No muss, no fuss, ready to withhold 1000+ transactions.

#### What do I win with this?

* You'll be able to add any currency!   
  Let's say you bought a stock or coin with another currency other than the one you're tracking your portfolio from? That can be easily specified. Instead of adding the number normally you can use the power of Google Finance to your advantage. Example below, $PRICE = 10, $DATE = JAN 10, 2022:

  ```
  =$PRICE * INDEX(GOOGLEFINANCE("CURRENCY:USDEUR";"price";$DATE;1);2;2)
  ```


* You'll have an overview of your entire portfolio within a single currency!
* If something isn't available on Google Finance

#### What do I lose, compared with other apps?

* It's not 100% accurate    
  but from my experience, 100% accurancy isn't a thing among stock trackers
* I takes a bit more management 
  Yes, you need to save a few formulas! and yes, you need to do a lot of manual configuration. But I promise it's just at the beginning! If you stay consistent with your portfolio, this also shouldn't be a problem, cause you'll just be repaeting what you already setup.

#### I really like this, but I would love see the evolution of my portfolio as well

That's completely possible, although the method I'll suggest is more of a work around. The reason why this suggestion will be a bit clunky is to spare the spreadsheet of endless API calls to Google Finance. 

**This method will give you an idea of how your porfolio progresses, but should not be used to take conclusions or used when monitoring very volutile positions.**

I'll leave a quick explanation on how it works on the Timeline sheet. 
I'd love to know if you can improve upon it! :) 

What I suggest is taking a snapshot for your portfolio everyday, and storing it on your sheet. What does this mean? I'll tell you quickly.

By creating a Macro (**Sheets > Extensions > Macros > Record Macro**), you're able to create a script that records & repeat those actions sequentially on call as many times as you want (ex. copy, pasting, selecting, etc). Once that's set, you'll be able to schedule it so it runs everyday at a certain time of day. 

💡 You can even set it to run multiple times a day, and calculate an average to make it more accurate! It's up to you how you how this is done!

If you're using the template as is, you can just copy-paste the script below into **Sheets > Extensions > App Scripts**.

  ```
function TIMELINEFORSURE() {
    var spreadsheet = SpreadsheetApp.getActive();
    // wait to load
    Utilities.sleep(5000);

    // create row
    spreadsheet.setActiveSheet(spreadsheet.getSheetByName('📊 Investing Timeline'), true);
    spreadsheet.getRange('2:2').activate();
    spreadsheet.getActiveSheet().insertRowsBefore(spreadsheet.getActiveRange().getRow(), 1);

    // set date
    spreadsheet.getActiveRange().offset(0, 0, 1, spreadsheet.getActiveRange().getNumColumns()).activate();
    spreadsheet.getRange('A2').activate();
    spreadsheet.getRange('J1').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

    // get overall values
    spreadsheet.getRange('B2').activate();
    spreadsheet.getRange('\'🌝 Life\'!H17:K17').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

    // get category values
    spreadsheet.getRange('J3').activate();
    spreadsheet.getRange('\'🌝 Life\'!I20:I22').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);
    spreadsheet.getRange('F2').activate();
    spreadsheet.getRange('J3:J5').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_VALUES, true);
    spreadsheet.getRange('J3:J5').activate();
    spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});

    // sort
    spreadsheet.getRange('A1').activate();
    spreadsheet.getActiveSheet().getFilter().sort(1, true);
};
  ```

#### I have some feedback!

Please send it directly to me! You can reach me via Linkedin or Twitter.

Thank you folks! Happy new year! 
