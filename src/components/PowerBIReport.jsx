import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client';
import './home.css';

const PowerBIReport = ({ embedUrl, accessToken }) => {
  return (
    <div className="report-container">
      <PowerBIEmbed
        embedConfig = {{
            type: 'report',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=8780e000-8308-43c6-8ecc-edb38a1e481d&groupId=b18a11fe-c5e2-4a2b-937e-ff589b109968&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCIsImtpZCI6IktRMnRBY3JFN2xCYVZWR0JtYzVGb2JnZEpvNCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWI0ZWFhYWQtYjg4Ny00OGNmLTg0MDctZTk5NDIwZWRhMmZiLyIsImlhdCI6MTcyNTAzNDEwMiwibmJmIjoxNzI1MDM0MTAyLCJleHAiOjE3MjUwMzg4NjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84WEFBQUEyRkVZUlVBT3JOUnc4VGxQTDN2a280RDA1aXEwbzNXa0pPb09tZUNDVXBZMnFOQ292RGFTOXUvbW96YjZZZVREa1Y4L1RSTDRaT0gwRlBSYTg3MVc3Z0I3WjZVVmh2Y1VkQmJvaEtqM0xkcz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJQUkFTQUQiLCJnaXZlbl9uYW1lIjoiQU5LVVNIIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMjQwNToyMDE6NDAxZjo2MjFmOjE1MDo5NjVkOjk3M2Y6OTk3MyIsIm5hbWUiOiIxNDExNDgwMzEyMiIsIm9pZCI6IjY2ZDBjZDdlLTcyM2UtNDk5Ni1hNmE3LWRkOWJlYmI0NjAxYyIsInB1aWQiOiIxMDAzMjAwMzE0QzU3NkUwIiwicmgiOiIwLkFWWUFyYXBPRzRlNHowaUVCLW1VSU8yaS13a0FBQUFBQUFBQXdBQUFBQUFBQUFCV0FHNC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJYM2Z5ZTAzdFdZYVh5LXRWeXAxcU5DY25fWWc1NDJOVUJtNkNyUURtZWU4IiwidGlkIjoiMWI0ZWFhYWQtYjg4Ny00OGNmLTg0MDctZTk5NDIwZWRhMmZiIiwidW5pcXVlX25hbWUiOiJhbmt1c2guMTQxMTQ4MDMxMjJAaXQubWFpdC5hYy5pbiIsInVwbiI6ImFua3VzaC4xNDExNDgwMzEyMkBpdC5tYWl0LmFjLmluIiwidXRpIjoiNzM1Wkd2TEtjRTZ2UzRaemNLbmNBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMTYifQ.INSy4mB7gs6ohpeitTPRkH0cg0bYwMc4DSiI3utyZWzp6HHJp5Uptw-iu1j_wab0V_srwy4CE1xnIe38QwY9p06yiSKePToPs6-ksxp4tWo40ASLZv-SUe7ZP7S8OV2yeIFKk6qoR0ZDO1ddpx7vasedaegjHHBz4U9cJ1SOzPX8C3N49Wss3IsDV2GPSAD9aU26QveccmyQ4VoSK6h07UVX32VxORHbmu1qo08kxROKRQu8rPvHK_OMExsH4VFLVyW432BC0nZRNnib1cMNos_NIxyHfRDJVYTSZ7jw9X-66Dgz3KXjpbM5RbXG5pZ-OCgGSuu5N5tvOdD7nAAMow',
            tokenType: models.TokenType.Aad,
            settings: {
                filterPaneEnabled: true,
                navContentPaneEnabled: true,
              },
          }}
            cssClassName="report-container"
            getEmbeddedComponent={(embeddedReport) => {
            console.log('Embedded Report:', embeddedReport);
        }}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default PowerBIReport;
