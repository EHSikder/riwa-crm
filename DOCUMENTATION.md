# RIWA CRM - User Documentation

## Table of Contents

1. [Getting Started](#getting-started)
2. [Dashboard](#dashboard)
3. [Clients Management](#clients-management)
4. [Deals Pipeline](#deals-pipeline)
5. [Tasks Management](#tasks-management)
6. [Employees](#employees)
7. [Documents](#documents)
8. [AI Features](#ai-features)
9. [Integrations](#integrations)
10. [FAQ](#faq)

---

## Getting Started

### Login

1. Visit `https://crm.riwaai.com` (or your custom domain)
2. Enter your email and password
3. Click "Sign In"

### First Steps

1. **Set up your organization**: Go to Settings → Organization
2. **Add team members**: Go to Employees → Add Employee
3. **Create your first client**: Go to Clients → Add Client
4. **Start tracking deals**: Go to Deals → Create Deal

---

## Dashboard

The Dashboard provides a real-time overview of your business metrics.

### Key Metrics

- **Total Clients**: Number of active client accounts
- **Active Deals**: Number of open sales opportunities
- **Pending Tasks**: Number of incomplete tasks
- **Team Members**: Number of active employees
- **Revenue (This Month)**: Total deal value closed this month
- **Conversion Rate**: Percentage of leads converted to deals

### Charts

- **Revenue Trend**: Monthly revenue visualization
- **Deals Closed**: Number of deals closed per month
- **Recent Activity**: Latest actions in your CRM

### Actions

- Click any metric to drill down into details
- Use date filters to view specific time periods
- Export reports for presentations

---

## Clients Management

### Adding a Client

1. Click "Clients" in the sidebar
2. Click "Add Client" button
3. Fill in client details:
   - Company Name (required)
   - Industry
   - Website
   - Phone & Email
   - Address & Location
   - Account Manager
4. Click "Create"

### Viewing Client Details

1. Click on a client name in the list
2. View:
   - Contact information
   - Communication history
   - Active deals
   - Associated tasks
   - Documents
   - Notes

### Updating Client Information

1. Open client profile
2. Click "Edit"
3. Update fields
4. Click "Save"

### Client Health Score

Each client has a health score (0-5) based on:
- Recent interactions
- Deal activity
- Task completion
- Document sharing

---

## Deals Pipeline

### Creating a Deal

1. Click "Deals" in the sidebar
2. Click "Create Deal"
3. Fill in:
   - Deal Title
   - Client (required)
   - Amount
   - Stage (Prospect → Closed Won/Lost)
   - Expected Close Date
   - Owner (assigned sales rep)
4. Click "Create"

### Deal Stages

1. **Prospect**: Initial opportunity identified
2. **Qualification**: Lead has been contacted and qualified
3. **Proposal**: Proposal sent to prospect
4. **Negotiation**: Terms being discussed
5. **Closed Won**: Deal successfully closed
6. **Closed Lost**: Deal lost to competitor

### Managing Deals

- **Drag & Drop**: Move deals between stages on Kanban board
- **Update Probability**: Set win probability (0-100%)
- **Add Notes**: Document conversations and progress
- **Attach Documents**: Link proposals and contracts

### Deal Analytics

- Total pipeline value
- Win rate by sales rep
- Average deal size
- Sales cycle duration

---

## Tasks Management

### Creating a Task

1. Click "Tasks" in the sidebar
2. Click "Create Task"
3. Fill in:
   - Task Title (required)
   - Description
   - Priority (Low/Medium/High/Urgent)
   - Assigned To
   - Due Date
   - Related Deal or Project
4. Click "Create"

### Task Statuses

- **To Do**: Not started
- **In Progress**: Currently being worked on
- **Review**: Waiting for approval
- **Completed**: Finished
- **Cancelled**: No longer needed

### Task Board

- View all tasks on Kanban board
- Drag tasks between columns
- Filter by assignee, priority, or due date
- Set reminders for upcoming deadlines

---

## Employees

### Adding Team Members

1. Click "Employees" in the sidebar
2. Click "Add Employee"
3. Fill in:
   - Full Name (required)
   - Email (required)
   - Job Title
   - Department
   - Manager
   - Hire Date
4. Click "Create"

### Employee Performance

Track metrics for each employee:
- Deals closed
- Tasks completed
- Client satisfaction
- Performance score

### Team Organization

- Create departments
- Assign team leads
- View org chart
- Manage permissions

---

## Documents

### Uploading Documents

1. Click "Documents" in the sidebar
2. Click "Upload Document"
3. Select file from computer
4. Add metadata:
   - Document Title
   - Description
   - Related Client or Project
5. Click "Upload"

### Document Storage

- Files stored securely in Dropbox
- Automatic backup and versioning
- Share links with clients
- Full-text search capability

### AI-Powered Features

- **Auto-Summarize**: AI generates summary of document
- **Key Points**: AI extracts important points
- **Search**: Find documents by content

---

## AI Features

### Summarization

1. Open a note or document
2. Click "Summarize with AI"
3. AI generates concise summary
4. Review and save

### Key Points Extraction

1. Open a document
2. Click "Extract Key Points"
3. AI identifies important information
4. Points appear in document details

### Insights

1. Go to Dashboard
2. View "AI Insights" section
3. Get recommendations for:
   - Follow-up needed
   - Deal risks
   - Opportunities
   - Churn risks

### Meeting Summaries

1. Upload meeting transcript
2. Click "Analyze Meeting"
3. AI extracts:
   - Participants
   - Action items
   - Key decisions
   - Next steps

---

## Integrations

### Dropbox

- Automatic file sync
- Secure storage
- Shareable links
- Version control

**Setup**: Settings → Integrations → Dropbox → Connect

### Groq AI

- Automatic summarization
- Key point extraction
- Business insights
- Document analysis

**Status**: Enabled by default

### Granola MCP

- Meeting transcript analysis
- Action item extraction
- Automatic note creation

**Setup**: Settings → Integrations → Granola → Connect

---

## FAQ

### Q: How do I reset my password?
A: Click "Forgot Password" on login page, enter email, follow reset link.

### Q: Can I export my data?
A: Yes, go to Settings → Data Export → Select format (CSV/JSON) → Export

### Q: How do I delete a client?
A: Open client → Click "..." menu → Delete. Note: This cannot be undone.

### Q: Can multiple people work on the same deal?
A: Yes, add team members as collaborators on the deal.

### Q: How often is data backed up?
A: Supabase automatically backs up daily. See Settings → Backups.

### Q: Can I customize the CRM for my workflow?
A: Yes, go to Settings → Customize to adjust fields and workflows.

### Q: How do I generate reports?
A: Go to Reports → Select metrics → Choose date range → Generate/Export

### Q: Is there a mobile app?
A: Mobile-responsive web app available on all devices.

### Q: How do I get support?
A: Email support@riwaai.com or visit Help Center.

### Q: Can I integrate other tools?
A: Yes, via Zapier or Make.com. See Integrations documentation.

---

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + K` | Quick search |
| `Cmd/Ctrl + N` | New item |
| `Cmd/Ctrl + S` | Save |
| `Escape` | Close modal |
| `?` | Show help |

---

## Best Practices

1. **Keep data updated**: Update client info and deal status regularly
2. **Use notes**: Document all interactions with clients
3. **Set reminders**: Never miss follow-up deadlines
4. **Review reports**: Check metrics weekly
5. **Leverage AI**: Use summaries and insights for better decisions
6. **Archive old data**: Keep system clean and fast
7. **Backup important files**: Download critical documents

---

## Support & Resources

- **Help Center**: https://help.riwaai.com
- **Video Tutorials**: https://youtube.com/@riwaai
- **Community Forum**: https://community.riwaai.com
- **Email Support**: support@riwaai.com
- **Phone Support**: +1-XXX-XXX-XXXX

---

**Last Updated**: March 2026  
**Version**: 1.0.0
