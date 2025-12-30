'use client';
import { Box, Typography, Paper } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function WeeklyCodeStats() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        border: '1px solid #e5e7eb',
        backgroundColor: '#fff',
      }}
    >
      <Typography
        variant="caption"
        sx={{ color: '#2563eb', fontWeight: 600 }}
      >
        Your week in code
      </Typography>

      <Box
        sx={{
          mt: 2,
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: 3,
          alignItems: 'center',
        }}
      >
        {/* LEFT CONTENT */}
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Lines of code exported
          </Typography>

          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ my: 1 }}
          >
            402
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: '#6b7280', mb: 1 }}
          >
            1,081 total this year
          </Typography>

          <Typography
            variant="caption"
            sx={{ color: '#9ca3af' }}
          >
            The number of new and modified lines of code generated via Builder.
            Data is updated daily.{' '}
            <Box
              component="span"
              sx={{ color: '#2563eb', cursor: 'pointer' }}
            >
              Learn more
            </Box>
          </Typography>
        </Box>

        {/* RIGHT CHART */}
        <Box sx={{ height: 220 }}>
          <BarChart
            xAxis={[
              {
                scaleType: 'band',
                data: days,
              },
            ]}
            series={[
              {
                data: [2000, 0, 0, 0, 0, 0, 0],
                color: '#3b82f6',
              },
              {
                data: [380, 0, 0, 0, 0, 0, 0],
                color: '#dd0030ff',
              },
              {
                data: [380, 0, 0, 0, 0, 0, 0],
                color: '#4b813eff',
              },
            ]}
            height={220}
            grid={{ horizontal: true }}
            sx={{
              '.MuiChartsAxis-tickLabel': {
                fill: '#6b7280',
                fontSize: 12,
              },
              '.MuiChartsGrid-line': {
                stroke: '#e5e7eb',
              },
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
}
